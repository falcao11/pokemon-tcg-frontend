export interface VisualCardInterface {
  card: {
    card_id: string;
    name: string;
    img_url: string;
    number: number;
  };
  onClick: () => void;
  isSelected: boolean;
  isUpdated: boolean;
  isEditMode: boolean;
}
