import { Children, createContext, isValidElement, ReactNode, useContext, useRef, useState } from "react";
import {
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { IcChevronDown, IcChevronUp } from "../../assets/icons";

interface LayoutRect {
  x: number;
  y: number;
  width: number;
  height: number;
}

interface SelectContextType {
  selected: string;
  isOpen: boolean;
  setSelected: (value: string) => void;
  toggle: () => void;
  close: () => void;
  placeholder?: string;
  triggerLayout: LayoutRect;
  setTriggerLayout: (layout: LayoutRect) => void;
}

const SelectContext = createContext<SelectContextType | null>(null);

interface SelectRootProps {
  children: ReactNode;
  onSelect?: (value: string) => void;
  placeholder?: string;
}

function SelectRoot({ children, onSelect, placeholder }: SelectRootProps) {
  const [selected, setSelectedState] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [triggerLayout, setTriggerLayout] = useState<LayoutRect>({ x: 0, y: 0, width: 0, height: 0 });

  const setSelected = (value: string) => {
    setSelectedState(value);
    onSelect?.(value);
    setIsOpen(false);
  };

  const toggle = () => setIsOpen((prev) => !prev);
  const close = () => setIsOpen(false);

  return (
    <SelectContext.Provider value={{ selected, isOpen, setSelected, toggle, close, placeholder, triggerLayout, setTriggerLayout }}>
      <View style={styles.selectWrapper}>{children}</View>
    </SelectContext.Provider>
  );
}

function Trigger() {
  const context = useContext(SelectContext);
  if (!context) throw new Error("Select.Trigger must be used within Select");

  const { selected, isOpen, toggle, placeholder, setTriggerLayout } = context;
  const ref = useRef<View>(null);

  const handlePress = () => {
    ref.current?.measureInWindow((x, y, width, height) => {
      setTriggerLayout({ x, y, width, height });
      toggle();
    });
  };

  return (
    <TouchableOpacity
      ref={ref}
      style={[styles.selectBox, isOpen && styles.selectBoxOpen]}
      onPress={handlePress}
      activeOpacity={1}
    >
      <Text style={[styles.placeholderText, !!selected && styles.placeholderTextSelected]}>
        {selected || placeholder}
      </Text>
      {isOpen ? <IcChevronUp /> : <IcChevronDown />}
    </TouchableOpacity>
  );
}

function Main({ children }: { children: ReactNode }) {
  const context = useContext(SelectContext);
  if (!context) throw new Error("Select.Main must be used within Select");

  const { isOpen, close, triggerLayout } = context;

  if (!isOpen) return null;

  return (
    <Modal transparent visible={isOpen} onRequestClose={close} animationType="none">
      <TouchableWithoutFeedback onPress={close}>
        <View style={StyleSheet.absoluteFill}>
          <TouchableWithoutFeedback>
            <ScrollView
              style={[
                styles.selectList,
                {
                  top: triggerLayout.y + triggerLayout.height + 10,
                  left: triggerLayout.x,
                  width: triggerLayout.width,
                },
              ]}
            >
              {Children.map(children, (child, index) => {
                const childArray = Children.toArray(children);
                const isLast = index === childArray.length - 1;
                if (isValidElement(child)) {
                  return { ...child, props: { ...child.props, isLast } };
                }
                return child;
              })}
            </ScrollView>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}

function Option({ value, children, isLast }: { value: string; children: ReactNode; isLast?: boolean }) {
  const context = useContext(SelectContext);
  if (!context) throw new Error("Select.Option must be used within Select");

  const { setSelected } = context;

  return (
    <TouchableOpacity
      style={[styles.selectItem, isLast && styles.selectItemLast]}
      onPress={() => setSelected(value)}
    >
      <Text style={styles.selectItemText}>{children}</Text>
    </TouchableOpacity>
  );
}

const Select = Object.assign(SelectRoot, {
  Trigger,
  Main,
  Option,
});

export default Select;

const styles = StyleSheet.create({
  selectWrapper: {
    position: "relative",
    width: "100%",
  },
  selectList: {
    position: "absolute",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#dedede",
    backgroundColor: "#ffffff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 4,
    maxHeight: 200,
  },
  selectItem: {
    height: 50,
    paddingHorizontal: 15,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#dedede",
    justifyContent: "center",
  },
  selectItemLast: {
    borderBottomWidth: 0,
  },
  selectItemText: {
    fontSize: 14,
    fontWeight: "400",
    color: "#000000",
  },
  selectBox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 20,
    paddingRight: 17,
    height: 60,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#c8c8c8",
  },
  selectBoxOpen: {
    backgroundColor: "#ffffff",
    borderWidth: 2,
    borderColor: "#14c3bc",
  },
  placeholderText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#9b9b9b",
  },
  placeholderTextSelected: {
    color: "#000000",
  },
});
