import React, { Children, useCallback, useMemo, useRef } from "react";
import { BottomSheetModal, BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { View } from "react-native";
import TextInput from "../TextInput/TextInput";
import styles from "./style";

type Props = {
  bottomSheetModalRef: any;
  children: React.ReactNode
};

function BottomModal(props: Props) {
  const snapPoints = useMemo(() => ["50%", "50%"], []);

  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);
  return (
    <BottomSheetModal ref={props.bottomSheetModalRef} index={1} snapPoints={snapPoints} onChange={handleSheetChanges}>
      <View style={styles.contentContainer}>{props.children}</View>
    </BottomSheetModal>
  );
}

export default BottomModal;
