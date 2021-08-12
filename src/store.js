import { configureStore } from '@reduxjs/toolkit';
import transactionsReducer from './components/TransactionSlice';
import budgetsReducer from './features/budgets/budgetsSlice';

export default configureStore({
  reducer: {
    transactions: transactionsReducer,
    budgets: budgetsReducer,
  },
});