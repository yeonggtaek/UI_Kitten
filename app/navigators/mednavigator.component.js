import { createStackNavigator } from '@react-navigation/stack';
import { AddScreen } from "@/app/pages/addMed/addmed.component"
import { ScanScreen } from "@/app/pages/addMed/scanscreen.component"
import { ManualNameEdit, ManualIntervalEdit, ManualDoseEdit, ExtraOptions, IconPick, MedConfirm } from "@/app/pages/addMed/manualscreen.component"
import { ConfirmScan } from "@/app/pages/addMed/scanconfirm.component"
import { EditScreen } from "@/app/pages/addMed/editmed.component"
import { EditInfoScreen, EditReminderScreen } from "@/app/pages/medLibrary.component"
import { SetTime } from "@/app/pages/addMed/addtimeinterval.component"
import { DosePerTime } from "@/app/pages/addMed/dosepertime.component"
import { NextDose } from "@/app/pages/addMed/nextdose.component"
import { TimeDose } from "@/app/pages/addMed/timenextdose.component"
import { Onboarding } from '../pages/home.component';
import { SetDuration } from "@/app/pages/addMed/duration.component"


const Stack = createStackNavigator();

export const MedNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Add Med" component={AddScreen} options={{headerShown: false}}/>
      <Stack.Screen name="Scan" component={ScanScreen} options={{headerShown: false}}/>

      <Stack.Screen name="Manual Name" component={ManualNameEdit} options={{headerShown: false}}/>
      <Stack.Screen name="Manual Interval" component={ManualIntervalEdit} options={{headerShown: false}}/>
      <Stack.Screen name="Manual Dose" component={ManualDoseEdit} options={{headerShown: false}}/>
      <Stack.Screen name='Extra Options' component={ExtraOptions} options={{headerShown: false}}/>
      <Stack.Screen name='Icon Pick' component={IconPick} options={{headerShown: false}}/>
      <Stack.Screen name='Med Confirm' component={MedConfirm} options={{headerShown: false}}/>
    
      <Stack.Screen name="Confirm Med" component={ConfirmScan} options={{headerShown: false}}/>
      <Stack.Screen name="Edit Med" component={EditScreen} options={{headerShown: false}}/>
      <Stack.Screen name="Med Time" component={SetTime} options={{headerShown: false}} />
      <Stack.Screen name="Dose Time" component={DosePerTime} options={{headerShown: false}} />
      <Stack.Screen name="Next Dose" component={NextDose} options={{headerShown: false}} />
      <Stack.Screen name="Time Dose" component={TimeDose} options={{headerShown: false}} />
      <Stack.Screen name="Duration" component={SetDuration} options={{headerShown: false}} />

      <Stack.Screen name="Edit Info" component={EditInfoScreen} options={{headerShown: false}}/>
      <Stack.Screen name="Edit Reminder" component={EditReminderScreen} options={{headerShown: false}}/>

      <Stack.Screen name="Onboarding" component={Onboarding} options={{headerShown: false}}/>
    </Stack.Navigator>
  )
}