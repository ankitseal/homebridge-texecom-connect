import { PlatformConfig } from "homebridge";
import { ConfigArea } from "./config-area";
import { ConfigZone } from "./config-zone";

export interface Config
	extends PlatformConfig {

	host: string;

	port: number;

	zones: ConfigZone[];

	areas: ConfigArea[];

}
