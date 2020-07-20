import React,{useEffect,useState} from 'react';
import { StyleSheet, Text, View,Image,FlatList,ActivityIndicator } from 'react-native';
import {Card, FAB} from 'react-native-paper'

function Home({navigation}) {

    const [data,setData] = useState([])
    const [loading,setLoading] = useState(true)
    useEffect(()=>{
        fetch("http://19554b0fd6b3.ngrok.io/")
        .then(res=>res.json())
        .then(results=>{
            setData(results)
            setLoading(false)
        })
    },[])

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
            {loading?
            <ActivityIndicator size="large" color="#0000ff" /> :
             
            <FlatList 
            data={data}
            renderItem={({item})=>{
               return renderList(item)
            }}
            keyExtractor={item=>item.id}
        /> }
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