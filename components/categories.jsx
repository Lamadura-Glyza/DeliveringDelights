import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { categories } from '../constants'
// import COLORS from '../constants/colors';

export default function Categories() {
    const [activeCategory, setActiveCategory] = useState(null);

    return (
        <View className="mt-4">
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                className="overflow-visible items-center justify-center"
                contentContainerStyle={{
                    flex: 1,
                    // backgroundColor: COLORS.black,
                    alignContent: 'center',
                    justifyContent: 'center'
                    
                }}
                >
                    {
                        categories.map((category, index)=>{
                            let isActive = category.id==activeCategory;
                            let btnClass = isActive? 'bg-gray-600': 'bg-gray-100';
                            let textClass= isActive? 'font-semibold  text-gray-800': ' text-gray-500';
                            return (
                                <View key={index} >
                                    <TouchableOpacity 
                                        onPress={()=> setActiveCategory(category.id)}>
                                            <Image style={{width: 45, height: 45}}
                                                    source={category.image}/>
                                     </TouchableOpacity>
                                        <Text className={"text-sm"+ textClass}>{category.name}</Text>
                                </View>
                            )
                        })
                    }
            </ScrollView>
        </View>
  )
}


