import styled from "styled-components";

export const ProductsContainer = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`;

export const ProductCard = styled.div`
 
  padding: 12px;
  flex-direction: row;
  width: 400px;
  height: 200px;
  border: 1px solid silver;
  align-items: center;
`;

export const ProductCardImage = styled.img`
  width: 100px;
  height: 100px;
`;

export const ProductTitle = styled.p`
  font-size: 12px;
  font-weight: bold;
`;

export const AddToCartButton = styled.button`
  width: 120px; /* Fixed width for the button */
  padding: 8px;
  background-color: #007bff; /* Blue color, you can change it as needed */
  color: #fff; /* Text color */
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3; /* Darker blue color on hover */
  }
`;

