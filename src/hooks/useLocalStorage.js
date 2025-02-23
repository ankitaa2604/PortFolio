const useLocalStorage = (key, initialValue) => {
    const [state, setState] = useState(() => {
      return JSON.parse(localStorage.getItem(key)) || initialValue;
    });
  
    useEffect(() => {
      localStorage.setItem(key, JSON.stringify(state));
    }, [key, state]);
  
    return [state, setState];
  };
  