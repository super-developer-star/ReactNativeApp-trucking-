import ImagePicker from 'react-native-image-picker';

const options = {};

export  function Uploader() {
  return new Promise((resolve, reject) => {
    ImagePicker.showImagePicker(options, (response) => {
      resolve(response);
    });
  });
}
