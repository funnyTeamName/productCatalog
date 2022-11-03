export interface PhoneType {
  id: number;
  namespaceId: string;
  name: string;
  capacityAvailable: [string];
  capacity: string;
  priceRegular: number;
  priceDiscount: number;
  colorsAvailable: [string];
  color: string;
  images: [string];
  description: [
    {
      title: string;
      text: [string];
    },
    {
      title: string;
      text: [string];
    },
    {
      title: string;
      text: [string];
    },
  ],
  screen: string;
  resolution: string;
  proccessor: string;
  ram: string;
  camera: string;
  zoom: string;
  cell:[string];
}
