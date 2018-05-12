import React, { Component } from 'react'
import { StyleSheet, View, Image, Modal, Text, } from 'react-native'
import { connect } from 'react-redux'

import Menu, {
  MenuProvider,
  MenuOptions,
  MenuOption,
  MenuTrigger
} from 'react-native-popup-menu';

import { createAction, NavigationActions } from '../utils'

@connect(({ app }) => ({ ...app }))
class Account extends Component {
  static navigationOptions = {
    title: 'Account',
    tabBarLabel: 'Account',
    tabBarIcon: ({ focused, tintColor }) => (
      <Image
        style={[styles.icon, { tintColor: focused ? tintColor : 'gray' }]}
        source={require('../images/person.png')}
      />
    ),
  }

  gotoLogin = () => {
    this.props.dispatch(NavigationActions.navigate({ routeName: 'Login' }))
  }

  logout = () => {
    this.props.dispatch(createAction('app/logout')())
  }

  render() {
    const { login } = this.props
    let unique = 0;
    return (
      
      <View style={styles.container}>
        <Text>Hello world!</Text>
        <MenuProvider style={{flex:1}}>
        <Menu>
            <MenuTrigger text='Select action' />
            <MenuOptions>
              <MenuOption onSelect={() => alert(`Save`)} text='Save' />
              <MenuOption onSelect={() => alert(`Delete`)} >
                <Text style={{ color: 'red' }}>Delete</Text>
              </MenuOption>
              <MenuOption onSelect={() => alert(`Not called`)} disabled={true} text='Disabled' />
            </MenuOptions>
          </Menu>
        </MenuProvider>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 32,
    height: 32,
  },
})

export default Account
