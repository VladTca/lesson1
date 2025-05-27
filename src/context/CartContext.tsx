import React, {createContext} from "react";

// типизация элемента корзины
interface ICartItem {
    id: number;
    title: string;
    price: string;
    quantity: number;
}

// типизация контекста в корзине
interface ICartContextType {
    // корзина
    cart: ICartItem[];
    // добавление элемента
    addToCart: (product: ICartItem) => void;
    // удаление элемента
    removeFromCart: (id: number) => void
    // очистка корзины
    clearCart: () => void;
}

// * 1. делаем контекст с помощью встроенного в react метода createContext()
export const CartContext = createContext<ICartContextType | undefined>(undefined)

export const CartProvider = ({children}: {children: React.ReactNode}) => {
    return (
        // за место children придут обернутые в компонент элементы
        // за счет контекста эти элементы получат доступ к данным в этом компоненте
        <>
            {children}
        </>
    )
}