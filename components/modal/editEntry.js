import React, { useState } from 'react';
import { 
  Modal, 
  View, 
  TextInput, 
  TouchableOpacity, 
  Text, 
  StyleSheet,
  Alert
} from 'react-native';
import make_request from '../../helpers/url_server';
import { UPDATE_ONE_USER } from '../../helpers/urls';

const EditFieldModal = ({ isVisible, onClose, onSave, initialValue, fieldName, session }) => {
  const [text, setText] = useState(initialValue);
  
  const updateData = async (payload) => {

    console.log("SESSION HERE", session);
    if (!session || !session.token || !session.userId) {
      Alert.alert("Error", "Session is invalid. Please logout and log in again.");
      return { status: 400 };
    }

    let response;
    try {
      response = await make_request({
        relative_url: UPDATE_ONE_USER,
        HEADERS: {
          "Authorization": `Bearer ${session.token}`
        },
        body: {
          field: payload.field,
          value: payload.value,
          _id: session.userId
        },
        method: 'PUT'
      });
      Alert.alert('Update Successful', JSON.stringify(response.data));
      isVisible = false;
    } catch (err) {
      console.log("Error updating user data:", err);
      Alert.alert("Error updating user data:", err);
    }
    console.log("response", response);

    return response.data;
  }

  const handleSave = () => {
    onSave(text, fieldName);
    
    const payload = {
      field: fieldName,
      value: text
    }

    const result = updateData(payload);

    console.log(result);

    onClose();
  };

  return (
    <Modal
      transparent={true}
      visible={isVisible}
      animationType="slide"
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Edit {fieldName}</Text>
          {
            fieldName === "password"  ? 
              (<TextInput
                style={styles.textInput}
                value={text}
                onChangeText={setText}
                secureTextEntry={true}
                placeholder="Enter your new password"
              />) :
              (<TextInput
                style={styles.textInput}
                value={text}
                onChangeText={setText}
                placeholder={`Enter your ${fieldName}`}
              />)
          }
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={onClose}>
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleSave}>
              <Text style={styles.buttonText}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    width: '80%',
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  textInput: {
    width: '100%',
    borderBottomWidth: 1,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  button: {
    padding: 10,
    backgroundColor: '#049B04',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default EditFieldModal;
