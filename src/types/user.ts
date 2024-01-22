export interface Plan {
  id: string;
  porcent: number;
  cost: number;
  title: string;
  createdAt: string;
  updatedAt: string;
}

export interface SellerOrder {
  id: string;
  qtd: number;
  priceSeller: number;
  code: string;
  clubDiscountPorcent: number;
  createdAt: string;
  updatedAt: string;
  productId: string;
  userId: string | null;
  orderId: string;
}

export interface Order {
  id: string;
  paymentUrl: string;
  typePayment: string | null;
  obs: string | null;
  totalValue: number;
  totalItens: number;
  deliveryDate: string;
  sellId: string;
  code: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  userId: string;
  expireToPay: string;
  SellerOrder: SellerOrder[];
}

export interface ProfileDetailsProps {
  id: string;
  email: string;
  name: string;
  phone: string;
  role: string;
  number: null;
  address: null;
  city: null;
  complement: null;
  state: null;
  cep: null;
  document: null;
  createdAt: string;
  updatedAt: string;
  avatarId: null;
  planId: string;
  expiratePlan: string;
  paymentLinkPlan: string;
  expireToPay: string;
  isPayedPlan: boolean;
  expirateDateLabel: string;
  sellId: string;
  isExpiredPlan: boolean;
  avatar: null;
  plan: Plan;
  Order: Order[];
}
