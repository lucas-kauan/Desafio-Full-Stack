import { createContext, useContext } from "react";
import { IContactUpdate } from "../../services/contacts/interface";

export interface IContactUpdateContext {
    updated: (object: IContactUpdate) => void
}

export const UpdateContext = createContext<IContactUpdateContext>({} as IContactUpdateContext)

const UpdatedProviders = ({ children }: any) => {
    const updated = ({ object }: any) => {

    }

    return (
        <UpdateContext.Provider value={
            { updated }
        }>
            {children}
        </UpdateContext.Provider>
    )
}

export default UpdatedProviders;

export const useUpdatedContext = () => {
    const context = useContext(UpdateContext)

    return context
};





