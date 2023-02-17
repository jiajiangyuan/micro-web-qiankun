function emptyAction(props: any) {
  // 提示当前使用的是空 Action
  console.warn("Current execute action is empty!");
}

class Actions {
  // 默认值为空 Action
  actions = {
    onGlobalStateChange: emptyAction,
    setGlobalState: emptyAction,
  };

  /**
   * 设置 actions
   */
  setActions(actions: any) {
    this.actions = actions;
  }

  /**
   * 映射
   */
  onGlobalStateChange() {
    // @ts-ignore
    return this.actions.onGlobalStateChange(...arguments);
  }

  /**
   * 映射
   */
  setGlobalState() {
    // @ts-ignore
    return this.actions.setGlobalState(...arguments);
  }
}

const actions = new Actions();
export default actions;
