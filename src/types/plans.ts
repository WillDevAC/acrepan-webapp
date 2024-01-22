export interface Plan {
  id: string;
  porcent: number;
  cost: number;
  title: string;
  createdAt: string;
  updatedAt: string;
}

export interface Clubs {
  plans: Plan[];
  count: number;
}
