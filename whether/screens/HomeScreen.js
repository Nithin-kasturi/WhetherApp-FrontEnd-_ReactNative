import { View, Text ,Image, SafeAreaView, TextInput, TouchableOpacity, TextBase, ScrollView} from 'react-native'
import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import {CalendarDaysIcon, MagnifyingGlassIcon} from 'react-native-heroicons/outline'
import {MapPinIcon} from 'react-native-heroicons/solid'

export default function HomeScreen() {
  const [showSearch,toggleShowSearch]=useState(false);
  const [locations,setLocations]=useState([1]);
  return (
    <View className="flex-1 relative">
      <StatusBar style='light'/>
      <Image source={require('./bg.jpg')}
        className="absolute h-full w-full" blurRadius={20}
      />
      <SafeAreaView className='flex flex-1 items'>
        {/* search section */}
        <View style={{height:'7%'}} className='pt-10 mx-4 relative z-50'>
            <View className="flex-row justify-end items-center rounded-full
            " style={{backgroundColor:showSearch?'white':'transparent'}}>
              {showSearch?(
                <TextInput placeholder='Enter City Name' placeholderTextColor={'black'}
                className='pl-6 h-10 flex-1 text-base text-black'
              />
              ):null}
              
              <TouchableOpacity onPress={()=>toggleShowSearch(!showSearch)} className="rounded-full p-2" style={{backgroundColor:'#d966ff'}}>
                    <MagnifyingGlassIcon size='25' color='white'/>
              </TouchableOpacity>
            </View>
            {
              locations.length>0 && showSearch ? (
                <View className='absolute rounded-3xl mt-24 bg-white  w-full'>
                  {
                    locations.map((loc,index)=>{
                      let showBorder=index+1!=locations.length;
                      let borderClass=showBorder?' border-b-2 border-b-gray-400':'';
                      return (
                        <TouchableOpacity key={index} className={"flex-row items-center border-0 p-3 mb-1 "+borderClass}>
                          <Text onPress={()=>handleLocation(loc)} className="text-black text-lg ml-2">
                            <MapPinIcon size='20'color='gray' />
                              United states of america
                          </Text>
                        </TouchableOpacity>
                      )
                    })
                  }
                </View>
              ):null
            }
        </View>
        <View className="mx-4 flex justify-around flex-1 mb-2">
            <Text className='text-white text-center text-2xl font-bold'>
              United,
              <Text className='text-lg font-semibold text-gray-300'>
              States of america
            </Text>
            </Text>
            <View className='flex-row justify-center'>
              <Image source={require('../assets/images/partlycloudy.png')} className='h-52 w-52'/>
             </View>
            <View className='space-y-2'>
            <Text className='text-center text-white text-6xl ml-5'>
                23&#176;
              </Text>
              <Text className='text-xl text-center text-white tracking-widest'>
                Partly Cloudy
              </Text>
            </View>
            <View className='flex-row justify-between mx-4'>
              <View className='flex-row space-x-2 items-center'>
                  <Image source={require('../assets/icons/wind.png')} className='h-6 w-6'/>
                  <Text className='text-white font-semibold text-base'>
                    22km
                  </Text>
              </View>
              <View className='flex-row space-x-2 items-center'>
                  <Image source={require('../assets/icons/drop.png')} className='h-6 w-6'/>
                  <Text className='text-white font-semibold text-base'>
                    22%
                  </Text>
              </View>
              <View className='flex-row space-x-2 items-center'>
                  <Image source={require('../assets/icons/sun.png')} className='h-6 w-6'/>
                  <Text className='text-white font-semibold text-base'>
                    6:05 AM
                  </Text>
              </View>
            </View>
        </View>
        <View className='mb-5 space-y-3'>
            <View className='flex-row items-center mx-5 space-x-2'>
                <CalendarDaysIcon size='22' color='white'/>
                <Text className='text-white text-base'>Daily Forecast</Text>
            </View> 
            <ScrollView horizontal 
              contentContainerStyle={{paddingHorizontal:15}}
              showsHorizontalScrollIndicator={false}
            > 
              <View className='flex justify-center items-center w-24 rounded-3xl py-3 space-y-1 mr-4'
              style={{backgroundColor:'white'}}
              > 
                <Image source={require('../assets/images/heavyrain.png')} className='h-11 w-11'/>
                <Text className='text-black'>
                    Monday
                </Text>
                <Text className='text-black font-semibold text-xl'>
                    20&#176;
                </Text>
              </View>
              <View className='flex justify-center items-center w-24 rounded-3xl py-3 space-y-1 mr-4'
              style={{backgroundColor:'white'}}
              > 
                <Image source={require('../assets/images/mist.png')} className='h-11 w-11'/>
                <Text className='text-black'>
                    Tuesday
                </Text>
                <Text className='text-black font-semibold text-xl'>
                    25&#176;
                </Text>
              </View>
              <View className='flex justify-center items-center w-24 rounded-3xl py-3 space-y-1 mr-4'
              style={{backgroundColor:'white'}}
              > 
                <Image source={require('../assets/images/sun.png')} className='h-11 w-11'/>
                <Text className='text-black'>
                    Wednesday
                </Text>
                <Text className='text-black font-semibold text-xl'>
                    28&#176;
                </Text>
              </View>
              <View className='flex justify-center items-center w-24 rounded-3xl py-3 space-y-1 mr-4'
              style={{backgroundColor:'white'}}
              > 
                <Image source={require('../assets/images/moderaterain.png')} className='h-11 w-11'/>
                <Text className='text-black'>
                    Thursday
                </Text>
                <Text className='text-black font-semibold text-xl'>
                    20&#176;
                </Text>
              </View>
              <View className='flex justify-center items-center w-24 rounded-3xl py-3 space-y-1 mr-4'
              style={{backgroundColor:'white'}}
              > 
                <Image source={require('../assets/images/heavyrain.png')} className='h-11 w-11'/>
                <Text className='text-black'>
                    Friday
                </Text>
                <Text className='text-black font-semibold text-xl'>
                    20&#176;
                </Text>
              </View>
              <View className='flex justify-center items-center w-24 rounded-3xl py-3 space-y-1 mr-4'
              style={{backgroundColor:'white'}}
              > 
                <Image source={require('../assets/images/heavyrain.png')} className='h-11 w-11'/>
                <Text className='text-black'>
                    Saturday
                </Text>
                <Text className='text-black font-semibold text-xl'>
                    20&#176;
                </Text>
              </View>
               <View className='flex justify-center items-center w-24 rounded-3xl py-3 space-y-1 mr-4'
              style={{backgroundColor:'white'}}
              > 
                <Image source={require('../assets/images/heavyrain.png')} className='h-11 w-11'/>
                <Text className='text-black'>
                    Sunday
                </Text>
                <Text className='text-black font-semibold text-xl'>
                    20&#176;
                </Text>
              </View>
              
            </ScrollView>
        </View>
      </SafeAreaView>
    </View>
  )
}