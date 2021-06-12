import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

function Profile({...props}) {
  const username = 'Robert Chandler';
  const usernumber = '+62 813-9387-7946';
  return (
    <View style={{backgroundColor: 'white', width: '100%', height: '100%'}}>
      <View style={styles.header}>
        <Image
          style={styles.backIcon}
          source={require('../../assets/img/arrow-left-black.png')}
        />
      </View>
      <ScrollView>
        <View style={styles.container}>
          <Image
            style={styles.profilePic}
            source={require('../../assets/img/blank-profile.png')}
          />
          <TouchableOpacity>
            <Text style={styles.textEdit}>Edit</Text>
          </TouchableOpacity>
          <Text style={styles.textUsername}>{username}</Text>
          <Text style={styles.textEdit}>{usernumber}</Text>
        </View>
        <View style={{marginTop: 40}}>
          <TouchableOpacity
            style={styles.card}
            onPress={() => props.navigation.navigate('PersonalInformation')}>
            <Text style={styles.textInCard}>Personal Information</Text>
            <Image style={styles.arrow } source={require('../../assets/img/arrow-right.png')} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.card}>
            <Text style={styles.textInCard}>Change Password</Text>
            <Image source={require('../../assets/img/arrow-right.png')} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.card}>
            <Text style={styles.textInCard}>Change PIN</Text>
            <Image source={require('../../assets/img/arrow-right.png')} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.card}>
            <Text style={styles.textInCard}>Notification</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card}>
            <Text style={styles.textInCard}>Logout</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    paddingTop: 20,
    paddingBottom: 10,
    paddingLeft: 15,
  },
  backIcon: {
    width: 35,
    height: 35,
  },
  container: {
    alignItems: 'center',
  },
  profilePic: {
    marginBottom: 20,
  },
  textEdit: {
    fontFamily: 'NunitoSans',
    fontSize: 16,
    color: '#7A7886',
    marginBottom: 20,
  },
  textUsername: {
    fontFamily: 'NunitoSans',
    fontWeight: 'bold',
    fontSize: 24,
    color: '#4D4B57',
  },
  card: {
    backgroundColor: '#E5E8ED',
    width: '90%',
    height: 60,
    borderRadius: 10,
    alignSelf: 'center',
    padding: 10,
    marginBottom: 20,
    paddingLeft: 20,
    flexDirection:'row',
  },
  textInCard: {
    fontFamily: 'NunitoSans',
    fontWeight: 'bold',
    fontSize: 17,
    lineHeight: 28,
    color: '#4D4B57',
    textAlignVertical: 'center',
    width:'90%',
  },
});
export default Profile;
