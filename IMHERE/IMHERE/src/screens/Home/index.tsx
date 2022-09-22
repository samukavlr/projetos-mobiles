import {Text, View, TextInput, TouchableOpacity} from 'react-native'
import {styles} from './style'
import {Participant} from '../Components/Participantes'


export function Home(){

    function handleParticipantAdd(){
        console.log('voce Clicou no botao "+"')
    }
    return(
        <View style={styles.container}>
            <Text style={styles.eventName}>
                Nome do Evento 
            </Text>
            <Text style={styles.eventDate}>
                Sexta,4 de nvembro de 2022
            </Text>
            <View style={styles.box}>
                <TextInput 
                    style={styles.input}
                    placeholder='Nome do participante'
                    placeholderTextColor={"#6B6B6B"}
                    // keyboardType='numeric'
                />
                <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
                    <Text style={styles.buttonText}>
                    +
                    </Text>
                </TouchableOpacity>
            </View>
            <Participant name="Samuel" />
            <Participant name="kalango"/>
            <Participant name="sei la jow"/>
            <Participant name="jubileu"/>
            

        </View>

    );
}


