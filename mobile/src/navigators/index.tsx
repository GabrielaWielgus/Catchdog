import type { CompositeNavigationProp } from '@react-navigation/native';
import type { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import type { StackNavigationProp } from '@react-navigation/stack';

import { RootStackParamList } from './RootStackNavigator';
import { ChatStackParamList } from './ChatStackNavigator';
import { AppTabParamList } from './AppTabNavigator';
import { useNavigation } from '@react-navigation/native';
import { NavigationProp } from '@react-navigation/native';
import { RouteProp } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';

export type NavigationParams = CompositeNavigationProp<
    StackNavigationProp<RootStackParamList>,
    CompositeNavigationProp<
        StackNavigationProp<ChatStackParamList>,
        BottomTabNavigationProp<AppTabParamList, "Map">
    >
>

export type RootStackNavigationProp = StackNavigationProp<RootStackParamList>
export type AppTabNavigationProp = BottomTabNavigationProp<AppTabParamList>
export type ChatStackNavigationProp = StackNavigationProp<ChatStackParamList>

// Typed useNavigation
export const useRootStackNavigation : () => RootStackNavigationProp = useNavigation
export const useAppTabNavigation : () => AppTabNavigationProp = useNavigation
export const useChatStackNavigation : () => ChatStackNavigationProp = useNavigation

// Typed useRoute
export const useChatStackRoute : () => RouteProp<ChatStackParamList> = useRoute