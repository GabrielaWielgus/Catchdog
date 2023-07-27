import * as Yup from "yup"
import { useFormik } from "formik"
import { useAppDispatch } from "../../../../redux/hooks"
import { walksSlice } from "../../../../redux/features/walks"
import { useAppSelector } from "../../../../redux/hooks"
import * as Location from "expo-location"
import { mapSocket } from "../../../../socket"
import {Socket} from "socket.io-client"
import { WalkUpdate } from "../../../../redux/features/walks"

export type BehavioralDisorders = "none" | "noiseSensitivity" | "fear" | "aggression"
export type OnLean = "yes" | "no"

export interface FormValues {
    onLean: OnLean
    behavioralDisorders: BehavioralDisorders
    walkDescription: string
}

interface props {
    startLocationTracking: () => Promise<void>
    closeForm: () => void
}

export const useWalkForm = (props : props) => {
    const dispatch = useAppDispatch()
    const user = useAppSelector(state => state.user)
    
    const initialValues : FormValues = {
        onLean: "yes",
        behavioralDisorders: "none",
        walkDescription: ""
    }
    
    const validationSchema = Yup.object({
        onLean: Yup.string().required(),
        behavioralDisorders: Yup.string().nullable().required(),
        walkDescription: Yup.string().required()
    })

    const handleSubmit = async (data:FormValues) => {
        const location = await Location.getCurrentPositionAsync()
        const payload : WalkUpdate = {
            userID: user.userID as number,
            walk: {
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
                walkDescription: data.walkDescription,
                behavioralDisorders: data.behavioralDisorders,
                onLean: data.onLean,
                userName: user.firstName
            }
        }
        dispatch(walksSlice.actions.setWalkWithID(payload))
        await props.startLocationTracking()
        props.closeForm()
    }

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: handleSubmit
    })

    return {
        formik
    }
}