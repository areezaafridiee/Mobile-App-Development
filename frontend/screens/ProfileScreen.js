import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import styles from '../styles/GlobalStyles';

const ProfileScreen = () => {
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('johndoe@example.com');
  const [editing, setEditing] = useState(false);

  const handleSave = () => {
    setEditing(false);
    alert('Profile updated successfully!');
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={{ alignItems: 'center', marginTop: 30 }}>
        <Image
          source={require('../../assets/profile.jpg')}
          style={{ width: 120, height: 120, borderRadius: 60, marginBottom: 20 }}
        />
        <TouchableOpacity onPress={() => alert('Change Profile Picture')}>
          <Text style={{ color: '#007bff', fontSize: 14 }}>Change Photo</Text>
        </TouchableOpacity>
      </View>

      <View style={{ padding: 20 }}>
        <Text style={styles.sectionTitle}>My Profile</Text>

        <View style={{ marginTop: 15 }}>
          <Text style={{ fontSize: 16, color: '#555' }}>Name</Text>
          <TextInput
            editable={editing}
            value={name}
            onChangeText={setName}
            style={{
              borderWidth: 1,
              borderColor: '#ddd',
              borderRadius: 10,
              padding: 10,
              marginTop: 5,
              color: '#000',
            }}
          />

          <Text style={{ fontSize: 16, color: '#555', marginTop: 15 }}>Email</Text>
          <TextInput
            editable={editing}
            value={email}
            onChangeText={setEmail}
            style={{
              borderWidth: 1,
              borderColor: '#ddd',
              borderRadius: 10,
              padding: 10,
              marginTop: 5,
              color: '#000',
            }}
          />

          {editing ? (
            <TouchableOpacity
              onPress={handleSave}
              style={{
                backgroundColor: '#28a745',
                padding: 12,
                borderRadius: 10,
                marginTop: 25,
              }}
            >
              <Text style={{ color: '#fff', textAlign: 'center', fontSize: 16 }}>Save</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => setEditing(true)}
              style={{
                backgroundColor: '#007bff',
                padding: 12,
                borderRadius: 10,
                marginTop: 25,
              }}
            >
              <Text style={{ color: '#fff', textAlign: 'center', fontSize: 16 }}>Edit Profile</Text>
            </TouchableOpacity>
          )}
        </View>

        <TouchableOpacity
          onPress={() => alert('Logged out successfully')}
          style={{
            backgroundColor: '#dc3545',
            padding: 12,
            borderRadius: 10,
            marginTop: 40,
          }}
        >
          <Text style={{ color: '#fff', textAlign: 'center', fontSize: 16 }}>Logout</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;
