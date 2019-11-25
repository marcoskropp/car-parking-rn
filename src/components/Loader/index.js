import React from 'react'
import { ActivityIndicator, Modal, View } from 'react-native'

import LoaderStyles from './Loader.styles'

export default Loader = ({ loading }) => {
  return (
    <Modal
      visible={loading}
      animationType='fade'
      transparent
      style={LoaderStyles.loaderWrapper}
    >
      <View style={LoaderStyles.loaderContainer}>
        <View style={LoaderStyles.loaderIcon}>
          <ActivityIndicator
            color='#000'
            size='large'
            animating={loading}
          />
        </View>
      </View>
    </Modal>
  )
}