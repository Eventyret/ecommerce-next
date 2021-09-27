import { useAddItem } from '@common/cart';

export const handler = {
  fetcher: () => {
    console.log('Fetching Data');
  },
  useHook: () => {
    return (input: any) => {
      return {
        output: JSON.stringify(input) + '_MODIFIED',
      };
    };
  },
};
export default useAddItem;
