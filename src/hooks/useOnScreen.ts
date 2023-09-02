import {useCallback, useState} from "react";

type UseOnScreenProps = {
    root?: Element | null;
    rootMargin?: string;
    threshold?: number;
};

type UseOnScreenReturn = {
    measureRef: (node: Element | null) => void;
    isIntersecting: boolean;
    observer?: IntersectionObserver;
};

const useOnScreen = ({
                         root = null,
                         rootMargin = "0px",
                         threshold = 0
                     }: UseOnScreenProps = {}): UseOnScreenReturn => {
    const [observer, setObserver] = useState<IntersectionObserver | undefined>();
    const [isIntersecting, setIntersecting] = useState(false);

    const measureRef = useCallback(
        (node: Element | null) => {
            if (node) {
                const intersectionObserver = new IntersectionObserver(
                    ([entry]) => {
                        setIntersecting(entry.isIntersecting);
                    },
                    {root, rootMargin, threshold}
                );

                intersectionObserver.observe(node);
                setObserver(intersectionObserver);
            }
        },
        [root, rootMargin, threshold]
    );

    return {measureRef, isIntersecting, observer};
};

export default useOnScreen;
