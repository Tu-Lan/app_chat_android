import { View, Text, TouchableWithoutFeedback, StyleSheet, Alert } from 'react-native'
import React, { useEffect } from 'react'
import ProfileImage from './ProfileImage'
import colors from '../constants/colors';
import { useNavigation } from '@react-navigation/native';
const DataUserItem = (props) => {
    const { accountId, title, image } = props;
    const navigation = useNavigation();
    return (
        <TouchableWithoutFeedback onPress={() => {
            navigation.navigate("DetailUser", {
                accountId: accountId
            })
        }}
        >
            <View style={styles.container}>
                <ProfileImage
                    uri={image}
                    size={40}
                    showEditBtn={false} />
                <View style={styles.textContainer}>
                    <Text
                        numberOfLines={1}
                        style={styles.title}>
                        {title}
                    </Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default DataUserItem

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingVertical: 7,
        borderBottomColor: colors.extraLightGrey,
        borderBottomWidth: 1,
        alignItems: 'center',
        minHeight: 50
    },
    textContainer: {
        marginLeft: 10,
        fontFamily: 'medium',
        fontSize: 16,
        letterSpacing: 0.3
    }
})