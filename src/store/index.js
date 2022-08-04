import { configureStore } from '@reduxjs/toolkit';
import nodes from './slices/nodes.slice';
import localization from './slices/localization.slice';
import locales from './slices/locales.slice';
import register from './slices/register.slice';

export default configureStore({
  reducer: {
    nodes,
    localization,
    locales,
    register,
  },
});
