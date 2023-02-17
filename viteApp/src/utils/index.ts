// 树状结构数组拍平
// export const d = (arr: any[]): any[] => {
//   const list: any[] = [];
//   arr.forEach((item, index) => {
//     list.push(item);
//     if (item.children) {
//       const arr = d(item.children);
//       list.push(...arr);
//     }
//   });
//   return list;
// };

// 树状结构数组拍平
export const d = (arr: any[]): any[] => {
  const list: any[] = [...arr];
  while (list.some((item) => item.children)) {
    const index = list.findIndex((item) => item.children);
    if (list[index].children) {
      list.push(...list[index].children);
      Reflect.deleteProperty(list[index], "children");
    }
  }
  console.log(list);
  return list;
};

// 防抖
export const debounce = (fn: Function, delay: number | undefined) => {
  let timer: string | number | NodeJS.Timeout | null | undefined = null;
  return function () {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn();
    }, delay);
  };
};

// 节流
export const throttle = (fn: () => void, delay: number | undefined) => {
  let flat = true;
  return () => {
    if (flat) {
      setTimeout(() => {
        fn();
      }, delay);
    }

    flat = false;
  };
};

export const throttling = (fn: () => void, delay: number) => {
  let time = 0;
  return () => {
    let now: any = new Date();
    if (now - time > delay) {
      fn();
      time = now;
    }
  };
};

export class myPromise {
  private state: string;
  private resolved: any;
  private rejected: any;
  constructor(
    fn: (arg0: (value: any) => void, arg1: (value: any) => void) => void
  ) {
    this.state = "pending";
    this.resolved = "";
    this.rejected = "";

    let resolve = (value: any) => {
      this.state = "resolve";
      this.resolved = value;
    };

    let reject = (value: any) => {
      this.state = "resolve";
      this.rejected = value;
    };

    try {
      fn(resolve, reject);
    } catch (e) {
      console.log(e);
    }
  }

  then(resolve: (arg0: any) => void, reject: (arg0: any) => void) {
    switch (this.state) {
      case "resolve":
        resolve(this.resolved);
        break;
      case "reject":
        reject(this.rejected);
        break;
    }
  }
}
