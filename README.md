# be-mediating (🕊️) [TODO]


```html
<thin-skin>
    #shadow
    <mood-stone></mood-stone>
    <script nomodule be-mediating="from ~toggleElement:change to ~moodStone." >
        {
            isHappy: f.toggleElement.checked
        }
    </script>
    <toggle-element disabled></toggle-element>

    <be-hive></be-hive>
</thin-skin>
```

"defer-hydration" also works instead of disabled.

Why not use be-calculating? be-observing?

The following table lists different scenarios, and where each enhancement shines

| Scenario                                                                                                            | Best Fit                                                     |
|---------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------|
| Calculate the "main" property based on aggregating values of multiple peer elements.  Scripting expressions a must. | [be-calculating](https://github.com/bahrus/be-calculating)   |

be-calculating is focused on setting the text display for the adorned element.

be-mediating allows for multiple side-by-side's

