import { Modal, View, Text, TouchableOpacity, TextInput } from "react-native";

interface Props {
  visible: boolean;
  onClose: () => void;
  minPrice: number | null;
  maxPrice: number | null;
  setMinPrice: (value: number | null) => void;
  setMaxPrice: (value: number | null) => void;
}

const PriceFilterModal = ({
  visible,
  onClose,
  minPrice,
  maxPrice,
  setMinPrice,
  setMaxPrice,
}: Props) => {
  return (
    <Modal visible={visible} transparent animationType="slide">
      <View className="flex-1 bg-black/50 justify-end">
        <View className="bg-background p-6 rounded-t-3xl">
          <Text className="text-text-primary text-lg font-bold mb-4">
            Filter by Price
          </Text>

          <TextInput
            placeholder="Min Price"
            keyboardType="numeric"
            value={minPrice?.toString() || ""}
            onChangeText={(v) => setMinPrice(v ? Number(v) : null)}
            className="bg-surface p-4 rounded-xl mb-3 text-text-primary"
          />

          <TextInput
            placeholder="Max Price"
            keyboardType="numeric"
            value={maxPrice?.toString() || ""}
            onChangeText={(v) => setMaxPrice(v ? Number(v) : null)}
            className="bg-surface p-4 rounded-xl mb-6 text-text-primary"
          />

          <View className="flex-row justify-between">
            <TouchableOpacity onPress={onClose}>
              <Text className="text-text-secondary">Cancel</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={onClose}>
              <Text className="text-primary font-bold">Apply</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default PriceFilterModal;