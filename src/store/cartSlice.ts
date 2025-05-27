import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import airpodsImage from '../assets/images/airpodsImage.jpg';
import galaxyWatchImage from '../assets/images/galaxyWatchImage.jpg';
import jblSpeakerImage from '../assets/images/jblSpeakerImage.jpg';
import logitechMouseImage from '../assets/images/logitechMouseImage.jpg';
import sonyHeadphonesImage from '../assets/images/sonyHeadphonesImage.jpg';
import fitbitChargeImage from '../assets/images/fitbitChargeImage.jpg';
import powercoreImage from '../assets/images/powercoreImage.jpg';
import nulaxyStandImage from '../assets/images/nulaxyStandImage.jpg';
import kingstonFlashDriveImage from '../assets/images/kingstonFlashDriveImage.jpg';
import sandiskSSDImage from '../assets/images/sandiskSSDImage.jpg';
import canonPrinterImage from '../assets/images/canonPrinterImage.jpg';
import tplinkRouterImage from '../assets/images/tplinkRouterImage.jpg';
import surfacePenImage from '../assets/images/surfacePenImage.jpg';
import dellMonitorImage from '../assets/images/dellMonitorImage.jpg';
import seagateHDDImage from '../assets/images/seagateHDDImage.jpg';

export interface Product {
  title: string;
  description: string;
  price: number;
  src: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface CartState {
  products: Product[];
  cartItems: CartItem[];
}

const initialState: CartState = {
  products: [
    {
      title: 'Apple AirPods Pro',
      description: 'Noise-cancelling wireless earbuds',
      price: 4999.99,
      src: airpodsImage,
    },
    {
      title: 'Samsung Galaxy Watch 5',
      description: 'Smartwatch with fitness tracking',
      price: 6999.99,
      src: galaxyWatchImage,
    },
    {
      title: 'JBL Flip 5 Bluetooth Speaker',
      description: 'Portable waterproof speaker',
      price: 2499.99,
      src: jblSpeakerImage,
    },
    {
      title: 'Logitech MX Master 3 Mouse',
      description: 'Wireless ergonomic mouse',
      price: 1999.99,
      src: logitechMouseImage,
    },
    {
      title: 'Sony WH-1000XM4 Headphones',
      description: 'Wireless noise-cancelling over-ear headphones',
      price: 6499.99,
      src: sonyHeadphonesImage,
    },
    {
      title: 'Fitbit Charge 5',
      description: 'Advanced fitness and health tracker',
      price: 2999.99,
      src: fitbitChargeImage,
    },
    {
      title: 'Anker PowerCore 10000',
      description: 'Portable charger with 10000mAh capacity',
      price: 799.99,
      src: powercoreImage,
    },
    {
      title: 'Nulaxy Laptop Stand',
      description: 'Adjustable ergonomic laptop stand',
      price: 599.99,
      src: nulaxyStandImage,
    },
    {
      title: 'Kingston 64GB Flash Drive',
      description: 'USB 3.0 high-speed flash drive',
      price: 299.99,
      src: kingstonFlashDriveImage,
    },
    {
      title: 'SanDisk 1TB Extreme SSD',
      description: 'Portable external solid state drive',
      price: 2499.99,
      src: sandiskSSDImage,
    },
    {
      title: 'Canon PIXMA Printer',
      description: 'All-in-one wireless printer',
      price: 1899.99,
      src: canonPrinterImage,
    },
    {
      title: 'TP-Link WiFi Router',
      description: 'Dual-band gigabit wireless router',
      price: 1299.99,
      src: tplinkRouterImage,
    },
    {
      title: 'Microsoft Surface Pen',
      description: 'Digital pen for Surface devices',
      price: 1499.99,
      src: surfacePenImage,
    },
    {
      title: 'Dell 27" 4K Monitor',
      description: 'Ultra HD IPS display monitor',
      price: 6999.99,
      src: dellMonitorImage,
    },
    {
      title: 'Seagate 2TB HDD',
      description: 'External hard disk drive',
      price: 1599.99,
      src: seagateHDDImage,
    },
  ],
  cartItems: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Product>) => {
      const existing = state.cartItems.find((item) => item.product.title === action.payload.title);
      if (existing) {
        existing.quantity += 1;
      } else {
        state.cartItems.push({ product: action.payload, quantity: 1 });
      }
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
  },
});

export const { addItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
