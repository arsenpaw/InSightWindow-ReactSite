export class DeviceDto {
  constructor(id, deviceType) {
    if (!id) {
      throw new Error("Id is required");
    }
    if (!deviceType) {
      throw new Error("DeviceType is required");
    }

    this.id = id;
    this.deviceType = deviceType;
  }

  // Getters (if you need them)
  getId() {
    return this.id;
  }

  getDeviceType() {
    return this.deviceType;
  }

  setDeviceType(deviceType) {
    if (!deviceType) {
      throw new Error("DeviceType is required");
    }
    this.deviceType = deviceType;
  }
}
