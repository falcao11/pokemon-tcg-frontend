export interface SetProps {
  set_id: string;
  isEditMode: boolean;
  isSelected: (card_id: string) => boolean;
  isUpdated: (card_id: string) => boolean;
  onClick: (card_id: string) => void;
  onLengthChange: (length: number) => void;
  onLoadingChange: (loading: boolean) => void;
}
