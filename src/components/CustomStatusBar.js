import {Fragment} from 'react';
import { SafeAreaView, StatusBar} from 'react-native';

const MyStatusBar = ({
  children,
  statusBgColor = '#fff',
  barStyle = 'light-content',
  contentBgColor = '#eee'
}) => {
    return(
        <Fragment>
          <StatusBar backgroundColor={statusBgColor} barStyle={barStyle}/>
          <SafeAreaView style={{flex: 0, backgroundColor: statusBgColor}} />
          <SafeAreaView style={{flex: 1, backgroundColor: contentBgColor}}> 
            {children}
          </SafeAreaView>
        </Fragment>
    );
};
export default MyStatusBar;
