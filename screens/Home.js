import React from 'react';
import { StyleSheet, Text, View,Image,FlatList } from 'react-native';
import {Card, FAB} from 'react-native-paper'

function Home({navigation}) {
    const data = [
        {id:"1",name:"Divyansh",position:"web dev",email:"abc@gmail.com",phone:"123",salary:"5000",picture:"https://images.unsplash.com/flagged/photo-1578848151039-b8916d7c1c34?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=521&q=80"},
        {id:"2",name:"Div",position:"web",email:"abc@gmail.com",phone:"123",salary:"50000000",picture:"https://images.unsplash.com/flagged/photo-1578848151039-b8916d7c1c34?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=521&q=80"},
        {id:"3",name:"Divy",position:"web dev",email:"abc@gmail.com",phone:"123",salary:"5000",picture:"https://images.unsplash.com/flagged/photo-1578848151039-b8916d7c1c34?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=521&q=80"},
        {id:"4",name:"Divyans",position:"web dev",email:"abc@gmail.com",phone:"123",salary:"5000",picture:"https://images.unsplash.com/flagged/photo-1578848151039-b8916d7c1c34?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=521&q=80"},
        {id:"5",name:"Divyan",position:"web dev",email:"abc@gmail.com",phone:"123",salary:"5000",picture:"https://images.unsplash.com/flagged/photo-1578848151039-b8916d7c1c34?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=521&q=80"}
    ]

    const renderList = ((item)=>{
        return(
            <View style={{flex:1}}>
            <Card style={styles.mycard} 
            onPress={()=>navigation.navigate("Profile",{item})}>
            <View style={styles.cardView}>
            <Image
            style={{width:60,height:60,borderRadius:30}}
            source={{uri:"https://images.unsplash.com/flagged/photo-1578848151039-b8916d7c1c34?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=521&q=80"}}
            />
            <View style={{marginLeft:20}}>
        <Text style={styles.text}>{item.name}</Text>
        <Text>{item.position}</Text>
            </View>
            
            </View>
        </Card>
        </View>
        )
    })
    return (
        <View style={{flex:1}}>
            <FlatList 
            data={data}
            renderItem={({item})=>{
               return renderList(item)
            }}
            keyExtractor={item=>item.id}
            />
              <FAB onPress={()=>navigation.navigate("Create")}
    style={styles.fab}
    small={false}
    icon="plus"
    theme={{colors:{accent:"#006aff"}}}
  />
        </View>
    )
        
    
    
}

const styles = StyleSheet.create({
    mycard:{
        margin:5,
        
    },
    cardView:{
        flexDirection:"row",
        padding:6
    },
    text:{
        fontSize:20
    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
      }
})

export default Home