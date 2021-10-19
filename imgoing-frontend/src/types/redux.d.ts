import 'react-redux';
import { ReducerType } from '@/modules/reducer';

declare module 'react-redux' {
  interface DefaultRootState extends ReducerType {}
}
