import styled from 'styled-components';

export const InnerContainer = styled.div`
  display: flex;
  max-width: 500px;
  gap: var(--spacing-1);
  justify-content: space-between;
  &.padded {
    padding: var(--spacing-1);
  }
`;
