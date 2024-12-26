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

The following table lists different scenarios, and where each alternative enhancement shines

| Scenario                                                                                                                    | Best Fit                                                     |
|-----------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------|
| Calculate the "main" property* based on aggregating values of multiple peer elements.  Scripting expressions a must.        | [be-calculating](https://github.com/bahrus/be-calculating)   |
| Pass "constant" properties from the adorned element to peer elements or the host on user interaction. Strictly declarative. | [be-elevating](https://github.com/bahrus/be-elevating)       |
| Two way bind, strictly declaratively, between an element and another peer element or the host.                              | [be-bound](https://github.com/bahrus/be-bound)               |




* By "main property" I mean the "most important" property for an element -- textContent for a div, value for the output / input element, href for the anchor tag, for example.

be-calculating is focused on setting the text display for the adorned element.

be-mediating allows for multiple side-by-side's

