import React, { useState } from "react";
import { styled } from "styled-components";
import useInventory from "../hooks/useInventory";

const Master = styled.div`
  width: 500px;
  min-height: 500px;
  position: fixed;
  bottom: 0;
  background-color: white;
  box-shadow: 2px 2px 8px gray;
  border-top-right-radius: 16px;
  border-top-left-radius: 16px;
`;

const Title = styled.div`
  background: #f2f2f2;
  display: flex;
  justify-content: space-between;
  border-top-right-radius: 16px;
  border-top-left-radius: 16px;
  align-items: center;
  padding: 8px 16px;
  color: var(--Black-12, #1a181e);
  font-size: 18px;
  font-weight: 500;

  .material-symbols-outlined {
    cursor: pointer;
    font-size: 20px;
  }
`;

const Form = styled.div`
  padding: 8px 16px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: relative;

  input {
    height: 30px;
    padding: 8px;
    outline: none;
    border-radius: 4px;
    border: 1px solid #d9d9d9;
    &::placeholder {
      color: var(--Black-60, #999);
      font-size: 14px;
      font-weight: 400;
      line-height: 20px;
    }
  }
`;

const ItemsList = styled.div`
  height: fit-content;
  max-height: 200px;
  overflow: auto;
  background: #fafafa;
`;

const ItemsSearchList = styled.div`
  height: fit-content;
  max-height: 100px;
  overflow-y: scroll;
  cursor: pointer;
`;

const Item = styled.div`
  padding: 6px;
  height: fit-content;
  max-height: 300px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  &:hover {
    background: #f2f2f2;
  }
`;

const ItemIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;

  .material-symbols-outlined {
    font-size: 20px;
  }
`;

const Footer = styled.div`
  display: flex;
  width: 100%;
  padding: 16px;
  flex-direction: row;
  justify-content: space-between;
  position: absolute;
  bottom: 0;
`;

const OrderTotal = styled.div`
  background-color: #f2f2f2;
  border-radius: 4px;
  height: 36px;
  width: fit-content;
  padding: 8px 20px;
`;

const Submit = styled.div`
  background-color: #1e2640;
  color: white;
  border-radius: 4px;
  height: 36px;
  width: fit-content;
  padding: 8px 20px;
  cursor: pointer;
`;

const CreateOrder = ({ display, setDisplay }) => {
  const [buyer, setBuyer] = useState("");
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState("");
  const [orderTotal, setOrderTotal] = useState(0);
  const { data, setData } = useInventory(search);

  function handleChange(e) {
    setSearch(e.target.value);
  }

  function handleAddItem(item) {
    console.log(item, items);
    setItems((prev) => {
      return [
        ...prev,
        { ...item, quantity: 1, maxQuantity: item?.maxQuantity - 1 },
      ];
    });

    setOrderTotal((prev) => prev + item.price);
  }

  function handleDecrease(id) {
    const newItems = [];
    items?.forEach((item) => {
      if (item?.id === id && item?.quantity > 1) {
        newItems.push({
          ...item,
          quantity: item?.quantity - 1,
          maxQuantity: item?.maxQuantity + 1,
        });
        setOrderTotal((prev) => prev - item.price);
      } else {
        newItems.push(item);
      }
    });

    setItems(newItems);
  }

  function handleIncrease(id) {
    const newItems = [];

    items?.forEach((item) => {
      if (item?.id === id && 1 <= item?.maxQuantity) {
        newItems.push({
          ...item,
          quantity: item?.quantity + 1,
          maxQuantity: item?.maxQuantity - 1,
        });

        setOrderTotal((prev) => prev + item.price);
      } else {
        newItems.push(item);
      }
    });

    setItems(newItems);
  }

  return display ? (
    <Master>
      <Title>
        <span>Create a new order</span>
        <span
          onClick={() => setDisplay(false)}
          class="material-symbols-outlined"
        >
          close
        </span>
      </Title>
      <Form>
        <input
          placeholder="Add Buyer"
          value={buyer}
          onChange={(e) => {
            setBuyer(e.target.value);
          }}
        ></input>
        <ItemsList>
          {items?.map((item) => {
            return (
              <Item>
                <span>{item?.name}</span>
                <ItemIcons>
                  <span
                    onClick={() => handleDecrease(item?.id)}
                    class="material-symbols-outlined"
                  >
                    remove
                  </span>
                  <span>{item.quantity}</span>
                  <span
                    onClick={() => handleIncrease(item?.id)}
                    class="material-symbols-outlined"
                  >
                    add
                  </span>
                </ItemIcons>
              </Item>
            );
          })}
        </ItemsList>

        <input
          placeholder="Search Items to add"
          onChange={handleChange}
          value={search}
        ></input>

        <ItemsSearchList>
          {data?.map((item) => {
            return (
              <Item onClick={() => handleAddItem(item)}>{item?.name}</Item>
            );
          })}
        </ItemsSearchList>
      </Form>
      <Footer>
        <OrderTotal>Order total: &#8377;{orderTotal}</OrderTotal>
        <Submit>Submit</Submit>
      </Footer>
    </Master>
  ) : null;
};

export default CreateOrder;
