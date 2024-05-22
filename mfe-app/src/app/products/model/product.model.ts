export type Product = {
  status: 'Active' | 'Inactive';
  name: string;
  id: string;
  startDate: string;
  endDate: string;
  pod: string;
  sellbackRecoveryTime: string;
  contractBlockPrice: number;
  approveForFixedPrice: 'Yes' | 'No';
  ppa: number;
};
