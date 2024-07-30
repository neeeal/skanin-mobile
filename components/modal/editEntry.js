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
import { Iconify } from 'react-native-iconify';

const EditFieldModal = ({ isVisible, onClose, onSave, initialValue, fieldName, session }) => {
  const [value, setValue] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [newPasswordConfirmation, setNewPasswordConfirmation] = useState('');
  const [secureText, setSecureText] = useState(true);
  const [secureTextNew, setSecureTextNew] = useState(true);
  const [secureTextConfirmation, setSecureTextConfirmation] = useState(true);

  const updateData = async (payload) => {
    if (!session || !session.token || !session.userId) {
      Alert.alert("Error", "Session is invalid. Please logout and log in again.");
      return { status: 400 };
    }

    try {
      const response = await make_request({
        relative_url: UPDATE_ONE_USER,
        HEADERS: {
          "Authorization": `Bearer ${session.token}`
        },
        body: payload,
        method: 'PUT'
      });
      Alert.alert('Update Successful', 'Your information has been updated.');
      onClose();
    } catch (err) {
      console.log("Error updating user data:", err);
      Alert.alert("Error updating user data:", err.message || "Something went wrong.");
    }
  }

  const handleSave = () => {
    onSave(String(value).toLowerCase(), fieldName);
    let payload = {};
    if (fieldName === "password") {
      if (value !== newPasswordConfirmation) {
        Alert.alert("Error", "New password and confirmation do not match.");
        return;
      }
        payload = {
        field: ["password"],
        value: [value],
        old_password: oldPassword,
        new_password_confirmation: newPasswordConfirmation,
        _id: session.userId
      };
    } else {
      payload = {
        field: [fieldName],
        value: [value],
        _id: session.userId
      };
    }
    console.log(payload)
    updateData(payload);
    onClose();
  };

  const onPressToggleOld = () => {
    setSecureText(!secureText);
  }

  const onPressToggleNew = () => {
    setSecureTextNew(!secureTextNew);
  }

  const onPressToggleConfirmation = () => {
    setSecureTextConfirmation(!secureTextConfirmation);
  }

  return (
    <Modal
      transparent={true}
      visible={isVisible}
      animationType="slide"
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Edit {fieldName}</Text>
          <View style={styles.inputContainer}>
            {fieldName === "password" ? (
              <>
                <View className="flex-row justify-between min-w-full items-center pb-2">
                <Text style={styles.label}>Old:</Text>
                <View className="flex-row flex-1 justify-between">
                <TextInput
                  style={styles.textInput}
                  value={oldPassword}
                  onChangeText={setOldPassword}
                  secureTextEntry={secureText}
                  placeholder="Enter your old password"
                />
                <TouchableOpacity onPress={onPressToggleOld} className="self-center">
                {
                    secureText ? (
                      <Iconify
                      icon='mdi:eye-off-outline' // Icons for visibility
                      size={24}
                      color={"#086608"} // Adjust color as needed
                    />
                    ) : 
                    (
                      <Iconify
                      icon='mdi:eye-outline' // Icons for visibility
                      size={24}
                      color={"#086608"} // Adjust color as needed
                    />
                    )
                  }
                </TouchableOpacity>
                </View></View>
                <View className="flex-row justify-between min-w-full items-center pb-2">
                <Text style={styles.label}>New:</Text>
                <View className="flex-row flex-1 justify-between">
                <TextInput
                  style={styles.textInput}
                  value={value}
                  onChangeText={setValue}
                  secureTextEntry={secureTextNew}
                  placeholder="Enter your new password"
                />
                <TouchableOpacity onPress={onPressToggleNew} className="self-center">
                {
                    secureTextNew ? (
                      <Iconify
                      icon='mdi:eye-off-outline' // Icons for visibility
                      size={24}
                      color={"#086608"} // Adjust color as needed
                    />
                    ) : 
                    (
                      <Iconify
                      icon='mdi:eye-outline' // Icons for visibility
                      size={24}
                      color={"#086608"} // Adjust color as needed
                    />
                    )
                  }
                </TouchableOpacity>
                </View>
                </View>
                <View className="flex-row justify-between min-w-full items-center pb-2">
                <Text style={styles.label}>Confirm:</Text>
                <View className="flex-row flex-1 justify-between">
                <TextInput
                  style={styles.textInput}
                  value={newPasswordConfirmation}
                  onChangeText={setNewPasswordConfirmation}
                  secureTextEntry={secureTextConfirmation}
                  placeholder="Confirm your new password"
                />
                <TouchableOpacity onPress={onPressToggleConfirmation} className="self-center">
                {
                    secureTextConfirmation ? (
                      <Iconify
                      icon='mdi:eye-off-outline' // Icons for visibility
                      size={24}
                      color={"#086608"} // Adjust color as needed
                    />
                    ) : 
                    (
                      <Iconify
                      icon='mdi:eye-outline' // Icons for visibility
                      size={24}
                      color={"#086608"} // Adjust color as needed
                    />
                    )
                  }
                </TouchableOpacity>
                </View>
                </View>
              </>
            ) : (
              <TextInput
                style={styles.textInput}
                value={value}
                onChangeText={setValue}
                placeholder={`Enter your ${fieldName}`}
              />
            )}
          </View>
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
  label:{
    fontSize: 14,
    textAlign: "right",
    minWidth: "20%",
    paddingRight: "1%"
  },
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
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  textInput: {
    width: '90%',
    padding: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    // marginBottom: 10,
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
