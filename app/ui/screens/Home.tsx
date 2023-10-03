import {
  Box,
  Button,
  Card,
  Center,
  HStack,
  Icon,
  Input,
  ScrollView,
  Text,
  VStack,
  View,
} from 'native-base';
import React, {useEffect, useRef, useState} from 'react';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import {ImageBackground, Pressable} from 'react-native';

export const backgroundUrl =
  'E:/Escritorio/T/ChatbotArq2023/app/assets/background.png';

export const sendIconUrl = 'E:EscritorioTChatbotArq2023appassetssendIcon.png';

export default function Home() {
  useEffect(() => {
    const fetchData = async () => {};
    fetchData();
  }, []);

  return (
    <>
      <View style={{flex: 1, backgroundColor: 'white'}}>
        {/* Imagen de fondo */}
        <ImageBackground
          source={require(backgroundUrl)}
          style={{
            width: '100%',
            height: '100%',
          }}>
          <VStack
            style={{
              flex: 1,
              padding: 10,
              paddingLeft: '5%',
            }}
            space={5}>
            <Box
              style={{
                backgroundColor: 'white',
                borderRadius: 10,
                width: '100%',
                height: '10%',
                top: '80%',
                justifyContent: 'center',
              }}>
              <HStack height={'100%'}>
                <Input
                  mx="5"
                  placeholder="Mensaje"
                  w="70%"
                  backgroundColor={'white'}
                  color={'black'}
                  height={'100%'}
                  background={'cover'}
                  variant={'unstyled'}
                />
              </HStack>
            </Box>
          </VStack>
        </ImageBackground>
      </View>
    </>
  );
}
