import { reactive, readonly, ref } from 'vue';

const registredDrovers = reactive<Record<string, boolean>>({});
const openedDroverName = ref<null | string>(null);

/**
 *
 * @param {string} name drover name
 * @returns {boolean} returns true if registration is successful and false if registration is unsuccessful
 *
 * The function registers an instance of the drover in the controller under the name "name"
 */
const registerDrover = (name: string): boolean => {
  if (registredDrovers.hasOwnProperty(name)) return false;

  registredDrovers[name] = false;
  return true;
};

/**
 * @param {string} name name of the drover
 * @returns {boolean} returns true in case of successful deregistration of the drover and false in case of unsuccessful
 *
 * The function unregisters the drover named name. If this drover is currently open, it will be closed
 */
const unregisterDrover = (name: string): boolean => {
  if (!registredDrovers.hasOwnProperty(name)) return false;

  if (openedDroverName.value === name) {
    closeDrover();
  }

  delete registredDrovers[name];
  return true;
};

/**
 * @param {string} name contains the name of the drover to open. The drover name is specified when registering it
 * @returns {boolean} returns true if the drover opens successfully and false if it fails.
 *
 * The function opens a drover with the specified name. If another drover was open at the time the function was called,
 *  it is closed
 */
const openDrover = (name: string): boolean => {
  if (!registredDrovers.hasOwnProperty(name)) return false;

  if (openedDroverName.value) {
    registredDrovers[openedDroverName.value] = false;
  }

  registredDrovers[name] = true;
  openedDroverName.value = name;
  document.body.classList.add('no-scroll');
  return true;
};

/**
 * @returns {boolean} returns true if the drover was successfully closed and false if
 *  if none of the registered drover is currently open
 *
 * The function closes the currently open drover
 */
const closeDrover = (): boolean => {
  if (!openedDroverName.value) return false;

  registredDrovers[openedDroverName.value] = false;
  openedDroverName.value = null;
  document.body.classList.remove('no-scroll');
  return true;
};

/**
 *
 * @param {string} name drover name
 * @returns {boolean} returns true if the drover switch is successful, false if the switch is unsuccessful
 *
 * The function switches the current visibility of the drover. If the drover with the name "name" is now
 * is displayed, then it is closed, otherwise it is shown
 */
const toggleDrover = (name: string): boolean => {
  if (!registredDrovers.hasOwnProperty(name)) return false;
  if (openedDroverName.value === name) {
    closeDrover();
  } else {
    openDrover(name);
  }
  return true;
};

export const useDroverController = () => ({
  openDrover,
  closeDrover,
  registerDrover,
  unregisterDrover,
  toggleDrover,
  openedDroverName: readonly(openedDroverName),
  droversStates: readonly(registredDrovers)
});
