type ReturnSingleton<T> = () => T;
type Args = any;
type ISingleton<T> = new (arg?: any) => T;

export default function makeSingleon<T>(Singleton: ISingleton<T>, args?: Args): ReturnSingleton<T> {
  let once: any = null;
  return () => {
    if (once === null) {
      once = new Singleton(args);
    }
    return once;
  };
}
