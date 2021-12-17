import React from 'react';
import { SvgXml } from 'react-native-svg';
import { Button, Stack, Text, FixedBottomCTA, Input } from 'ui';
import { colors } from 'design-token';
import { icon_circlePlus } from 'icons';
import { StyleSheet, View } from 'react-native';

const PlanAddTaskScreen = () => {
  return (
    <FixedBottomCTA text='저장' onPress={() => null}>
      <Stack>
        <Text style={{ marginVertical: 40 }} fontType='BOLD_24'>
          {'준비 항목 등록 후\n시간 계산을 해드려요 🔥'}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 14,
          }}>
          <Text fontType='BOLD_16'>준비 항목</Text>
          <View style={{ flexDirection: 'row' }}>
            <Text
              fontType='BOLD_12'
              style={{ marginRight: 8, paddingHorizontal: 6, paddingVertical: 4 }}
              color={colors.grayDark}>
              히스토리
            </Text>
            <Text
              fontType='BOLD_12'
              style={{ paddingHorizontal: 6, paddingVertical: 4 }}
              color={colors.grayDark}>
              불러오기
            </Text>
          </View>
        </View>
        <Button
          backgroundColor={colors.grayLight}
          textColor={colors.grayDark}
          onPress={() => {}}
          leftIcon={<SvgXml xml={icon_circlePlus}></SvgXml>}>
          새로운 준비 항목
        </Button>
      </Stack>
    </FixedBottomCTA>
  );
};

export default PlanAddTaskScreen;

const styles = StyleSheet.create({});
