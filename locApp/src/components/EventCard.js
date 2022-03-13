import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Share,
  ToastAndroid,
} from 'react-native';
import {
  Card,
  Subheading,
  Paragraph,
  useTheme,
  ProgressBar,
  Button,
} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import Geolocation from '@react-native-community/geolocation';
import RNAndroidLocationEnabler from 'react-native-android-location-enabler';
import {getDistanceFromLatLonInKm} from '../utils/helper';

const EventCard = ({event, isVolunteer}) => {
  const {colors} = useTheme();
  const navigation = useNavigation();
  const [marked, setMarked] = useState(false);
  const diffDays = Math.ceil(
    Math.abs(new Date() - new Date(event.event_date)) / (1000 * 60 * 60 * 24),
  );
  const onShare = async () => {
    try {
      const result = await Share.share({
        message: `Hey! there,\n this event ${
          event.name
        } will be conducted on ${new Date(
          event.event_date,
        ).toLocaleDateString()} do check It out and contribute if possible :)`,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  // const hasAndroidPermission = async () => {
  //   const permission = PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION;

  //   const hasPermission = await PermissionsAndroid.check(permission);
  //   if (hasPermission) {
  //     return true;
  //   } else {
  //     PermissionsAndroid.request(permission).then(value => {
  //       if (value === 'granted') {
  //         markAttendance();
  //       } else {
  //         ToastAndroid.show(
  //           "Attendance can't be marked unless you grant gps permissions",
  //           ToastAndroid.SHORT,
  //         );
  //       }
  //     });
  //   }
  // };

  const markAttendance = () => {
    RNAndroidLocationEnabler.promptForEnableLocationIfNeeded({
      interval: 10000,
      fastInterval: 5000,
    })
      .then(data => {
        Geolocation.getCurrentPosition(info => {
          const {latitude, longitude} = info.coords;
          let dist = getDistanceFromLatLonInKm(
            latitude,
            longitude,
            event.latitude,
            event.longitude,
          );

          if (dist > 1)
            return alert(
              'Since you are not present on site ! Your Attendance could not be marked :(',
            );
          else {
            setMarked(true);
            ToastAndroid.show(
              'Your attendance has been marked.\n We hope you volunteer and create an impact :)',
              ToastAndroid.LONG,
            );
          }
        });
      })
      .catch(() =>
        ToastAndroid.show(
          'Pleae turn on your location to mark attendance',
          ToastAndroid.SHORT,
        ),
      );
  };

  return (
    <Card
      style={{marginTop: 15}}
      onPress={() =>
        isVolunteer ? {} : navigation.navigate('Event', {event})
      }>
      <Card.Cover
        source={{
          uri: event.image,
        }}
      />
      <Card.Content>
        <Subheading style={{fontWeight: 'bold', fontSize: 16}}>
          {event.name}
        </Subheading>
        <Paragraph style={{color: colors.textBefore}}>
          By. {event.createdBy}
        </Paragraph>
        {isVolunteer ? (
          <Button
            onPress={markAttendance}
            disabled={
              new Date(event.event_date).toLocaleDateString() !==
                new Date().toLocaleDateString() || marked
            }>
            {marked ? 'First Attendance Marked :)' : 'Mark Attendance'}
          </Button>
        ) : (
          <View>
            <View style={{flexDirection: 'row', marginBottom: 10}}>
              <Paragraph style={{fontWeight: 'bold'}}>
                Rs. {event.collectedAmount}{' '}
              </Paragraph>
              <Paragraph>out of {event.targetAmount}</Paragraph>
            </View>
            <ProgressBar progress={0.8} color={colors.accent} />
            <View style={styles.section}>
              <View
                style={{
                  ...styles.info,
                  backgroundColor: colors.border,
                }}>
                <Ionicons name="timer-outline" size={20} color={colors.text} />
                <Paragraph style={{fontWeight: 'bold'}}>
                  {diffDays} day{diffDays !== 1 && 's'} left
                </Paragraph>
              </View>
              <View
                style={{
                  ...styles.info,
                  backgroundColor: colors.border,
                }}>
                <MaterialCommunityIcons
                  name="account-group-outline"
                  size={20}
                  color={colors.text}
                />
                <Paragraph style={{fontWeight: 'bold'}}>
                  {event.contributors}+ backers
                </Paragraph>
              </View>
            </View>
            <TouchableOpacity
              onPress={onShare}
              style={{...styles.section, width: '25%', alignSelf: 'center'}}>
              <Ionicons
                name={'share-social-outline'}
                style={{
                  fontSize: 26,
                  color: colors.text,
                }}
              />
              <Paragraph style={{fontSize: 16}}>Share</Paragraph>
            </TouchableOpacity>
          </View>
        )}
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  info: {
    height: 40,
    width: '45%',
    borderRadius: 30,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
});

export default EventCard;
