import os
import folder_paths
from ..libs.utils import AlwaysEqualProxy

class showLoaderSettingsNames:
    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "pipe": ("PIPE_LINE",),
            },
            "hidden": {
                "unique_id": "UNIQUE_ID",
                "extra_pnginfo": "EXTRA_PNGINFO",
            },
        }

    RETURN_TYPES = ("STRING", "STRING", "STRING",)
    RETURN_NAMES = ("ckpt_name", "vae_name", "lora_name")

    FUNCTION = "notify"
    OUTPUT_NODE = True

    CATEGORY = "EasyUse/Util"
    def notify(self, pipe, names=None, unique_id=None, extra_pnginfo=None):
        if unique_id and extra_pnginfo and "workflow" in extra_pnginfo:
            workflow = extra_pnginfo["workflow"]
            node = next((x for x in workflow["nodes"] if str(x["id"]) == unique_id), None)
            if node:
                ckpt_name = pipe['loader_settings']['ckpt_name'] if 'ckpt_name' in pipe['loader_settings'] else ''
                vae_name = pipe['loader_settings']['vae_name'] if 'vae_name' in pipe['loader_settings'] else ''
                lora_name = pipe['loader_settings']['lora_name'] if 'lora_name' in pipe['loader_settings'] else ''

                if ckpt_name:
                    ckpt_name = os.path.basename(os.path.splitext(ckpt_name)[0])
                if vae_name:
                    vae_name = os.path.basename(os.path.splitext(vae_name)[0])
                if lora_name:
                    lora_name = os.path.basename(os.path.splitext(lora_name)[0])

                names = "ckpt_name: " + ckpt_name + '\n' + "vae_name: " + vae_name + '\n' + "lora_name: " + lora_name
                node["widgets_values"] = names

        return {"ui": {"text": [names]}, "result": (ckpt_name, vae_name, lora_name)}

class showLoaderSettings:
    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "pipe": ("PIPE_LINE",),
            },
            "hidden": {
                "unique_id": "UNIQUE_ID",
                "extra_pnginfo": "EXTRA_PNGINFO",
            },
        }

    RETURN_TYPES = ("STRING", "STRING", "STRING", "STRING", "STRING", "INT", "INT", "INT", "FLOAT", "STRING", "STRING", "LIST",)
    RETURN_NAMES = ("ckpt_name", "vae_name", "lora_name", "positive", "negative", "width", "height", "steps", "cfg", "sampler_name", "scheduler", "list",)

    FUNCTION = "notify"
    # OUTPUT_NODE = True

    CATEGORY = "EasyUse/Util"
    def notify(self, pipe, names=None, unique_id=None, extra_pnginfo=None):
        print(unique_id and extra_pnginfo and "workflow" in extra_pnginfo)
        if unique_id and extra_pnginfo and "workflow" in extra_pnginfo:
            # workflow = extra_pnginfo["workflow"]
            # node = next((x for x in workflow["nodes"] if str(x["id"]) == unique_id), None)
            # print(node)
            # if node:
                print(pipe['loader_settings'])
                ckpt_name = pipe['loader_settings']['ckpt_name'] if 'ckpt_name' in pipe['loader_settings'] else ''
                vae_name = pipe['loader_settings']['vae_name'] if 'vae_name' in pipe['loader_settings'] else ''
                lora_name = pipe['loader_settings']['lora_name'] if 'lora_name' in pipe['loader_settings'] else ''
                positive = pipe['loader_settings']['positive'] if 'positive' in pipe['loader_settings'] else ''
                negative = pipe['loader_settings']['negative'] if 'negative' in pipe['loader_settings'] else ''
                width = pipe['loader_settings']['empty_latent_width'] if 'empty_latent_width' in pipe['loader_settings'] else 0
                height = pipe['loader_settings']['empty_latent_height'] if 'empty_latent_height' in pipe['loader_settings'] else 0
                steps = pipe['loader_settings']['steps'] if 'steps' in pipe['loader_settings'] else 0
                cfg = pipe['loader_settings']['cfg'] if 'cfg' in pipe['loader_settings'] else 0.0
                sampler_name = pipe['loader_settings']['sampler_name'] if 'sampler_name' in pipe['loader_settings'] else ''
                scheduler = pipe['loader_settings']['scheduler'] if 'scheduler' in pipe['loader_settings'] else ''


                if ckpt_name:
                    ckpt_name = os.path.basename(os.path.splitext(ckpt_name)[0])
                if vae_name:
                    vae_name = os.path.basename(os.path.splitext(vae_name)[0])
                if lora_name:
                    lora_name = os.path.basename(os.path.splitext(lora_name)[0])

                list_with_all = [ckpt_name,vae_name,lora_name,positive,negative,str(width),str(height),str(steps),str(cfg),sampler_name,scheduler]

                # names = "scheduler: " + scheduler
                # names = "ckpt_name: " + ckpt_name + '\n' + "vae_name: " + vae_name + '\n' + "lora_name: " + lora_name + '\n' + "positive: " + positive + '\n' + "negative: " + negative + '\n' + "width: " + str(width) + '\n' + "height: " + str(height) + '\n' + "steps: " + str(steps) + '\n' + "cfg: " + str(cfg) + '\n' + "sampler_name: " + sampler_name + '\n' + "scheduler: " + scheduler
                # names = "ckpt_name: " + ckpt_name + "vae_name: " + vae_name + "lora_name: " + lora_name + "positive: " + positive + "negative: " + negative + "width: " + str(width) + "height: " + str(height) + "steps: " + str(steps) + "cfg: " + str(cfg) + "sampler_name: " + sampler_name + "scheduler: " + scheduler
                # print(names)
                # node["widgets_values"] = names

        return {"result": (ckpt_name, vae_name, lora_name, positive, negative, width, height, steps, cfg, sampler_name, scheduler, list_with_all,)}
        # return {"ui": {"text": [names]}, "result": (ckpt_name, vae_name, lora_name, positive, negative, width, height, steps, cfg, sampler_name, scheduler, list_with_all,)}

class sliderControl:
    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "mode": (['ipadapter layer weights'],),
                "model_type": (['sdxl', 'sd1'],),
            },
            "hidden": {
                "prompt": "PROMPT",
                "my_unique_id": "UNIQUE_ID",
                "extra_pnginfo": "EXTRA_PNGINFO",
            },
        }

    RETURN_TYPES = ("STRING",)
    RETURN_NAMES = ("layer_weights",)

    FUNCTION = "control"

    CATEGORY = "EasyUse/Util"

    def control(self, mode, model_type, prompt=None, my_unique_id=None, extra_pnginfo=None):
        values = ''
        if my_unique_id in prompt:
            if 'values' in prompt[my_unique_id]["inputs"]:
                values = prompt[my_unique_id]["inputs"]['values']

        return (values,)

class setCkptName:
    @classmethod
    def INPUT_TYPES(cls):
        return {"required": {
                "ckpt_name": (folder_paths.get_filename_list("checkpoints"),),
            }
        }

    RETURN_TYPES = (AlwaysEqualProxy('*'),)
    RETURN_NAMES = ("ckpt_name",)
    FUNCTION = "set_name"
    CATEGORY = "EasyUse/Util"

    def set_name(self, ckpt_name):
        return (ckpt_name,)

class setControlName:

    @classmethod
    def INPUT_TYPES(cls):
        return {"required": {
                "controlnet_name": (folder_paths.get_filename_list("controlnet"),),
            }
        }

    RETURN_TYPES = (AlwaysEqualProxy('*'),)
    RETURN_NAMES = ("controlnet_name",)
    FUNCTION = "set_name"
    CATEGORY = "EasyUse/Util"

    def set_name(self, controlnet_name):
        return (controlnet_name,)


NODE_CLASS_MAPPINGS = {
    "easy showLoaderSettingsNames": showLoaderSettingsNames,
    "easy showLoaderSettings": showLoaderSettings,
    "easy sliderControl": sliderControl,
    "easy ckptNames": setCkptName,
    "easy controlnetNames": setControlName,
}

NODE_DISPLAY_NAME_MAPPINGS = {
    "easy showLoaderSettingsNames": "Show Loader Settings Names",
    "easy showLoaderSettings": "Show Loader Settings",
    "easy sliderControl": "Easy Slider Control",
    "easy ckptNames": "Ckpt Names",
    "easy controlnetNames": "ControlNet Names",
}