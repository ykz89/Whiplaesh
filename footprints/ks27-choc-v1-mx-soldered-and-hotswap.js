module.exports = {
    params: {
        designator: 'S',
        side: 'B',
        from: undefined,
        to: undefined,
        include_switch_hole: {type: 'boolean', value: true},
        include_traces: {type: 'boolean', value: false},
    },
    body: p => {
        const standard = `
            (footprint "ks27-choc-v1-mx-soldered-and-hotswap"
            ${p.at /* parametric position */}
            (layer "${p.side}.Cu")
            ${'' /* footprint reference */}
            (property reference "${p.ref}" 
                (at 0.1 -8.5 ${p.r}) 
                (layer ${p.side}.SilkS) 
                ${p.ref_hide}
                (effects (font (size 1 1) (thickness 0.15)))
            )
            (fp_text user "${p.ref}" (at 0.1 -8.5) (layer "B.Fab") (effects (font (size 1 1) (thickness 0.15)) (justify mirror)))
            
            (fp_line (start -5.08 2.54) (end 0 2.54) (layer "B.SilkS") (width 0.15))
            (fp_line (start -7 5.6) (end -7 6.2) (layer "B.SilkS") (width 0.15))
            (fp_line (start 5.969 0.635) (end 6.35 0.635) (layer "B.SilkS") (width 0.15))
            (fp_line (start 2.464162 0.635) (end 4.191 0.635) (layer "B.SilkS") (width 0.15))
            (fp_line (start -5.08 6.985) (end -5.08 6.604) (layer "B.SilkS") (width 0.15))
            (fp_line (start -5.08 3.556) (end -5.08 2.54) (layer "B.SilkS") (width 0.15))
            (fp_line (start 6.35 1.016) (end 6.35 0.635) (layer "B.SilkS") (width 0.15))
            (fp_line (start 6.35 4.445) (end 6.35 4.064) (layer "B.SilkS") (width 0.15))
            (fp_line (start 3.81 6.985) (end -5.08 6.985) (layer "B.SilkS") (width 0.15))
            (fp_arc (start 6.35 4.445) (mid 5.606051 6.241051) (end 3.81 6.985) (layer "B.SilkS") (width 0.15))
            (fp_arc (start 2.464162 0.61604) (mid 1.563147 2.002042) (end 0 2.54) (layer "B.SilkS") (width 0.15))
            (fp_line (start -7.5 -7.5) (end -7.5 7.5) (stroke (width 0.1) (type solid)) (layer "F.Fab"))
            (fp_line (start -7.5 7.5) (end 7.5 7.5) (stroke (width 0.1) (type solid)) (layer "F.Fab"))
            (fp_line (start 7.5 -7.5) (end -7.5 -7.5) (stroke (width 0.1) (type solid)) (layer "F.Fab"))
            (fp_line (start 7.5 7.5) (end 7.5 -7.5) (stroke (width 0.1) (type solid)) (layer "F.Fab"))

            (pad "" np_thru_hole circle (at 5.08 0 ${180 + p.r}) (size 1.7018 1.7018) (drill 1.7018) (layers *.Mask "F.Cu" "In1.Cu" "B.Cu"))
            (pad "" np_thru_hole circle (at -5.08 0 ${180 + p.r}) (size 1.7018 1.7018) (drill 1.7018) (layers *.Mask "F.Cu" "In1.Cu" "B.Cu"))
            (pad "" np_thru_hole circle (at -5 3.8 ${p.r}) (size 3 3) (drill 3) (layers F&B.Cu *.Mask))
            (pad "" np_thru_hole circle (at 3.81 2.54 ${180 + p.r}) (size 3 3) (drill 3) (layers *.Mask "F.Cu" "In1.Cu" "B.Cu"))
            (pad "" np_thru_hole circle (at 0 0 ${180 + p.r}) (size 3.9878 3.9878) (drill 3.9878) (layers *.Mask "F.Cu" "In1.Cu" "B.Cu"))
            (pad "" np_thru_hole circle (at -4.4 4.7 ${p.r}) (size 3 3) (drill 3) (layers F&B.Cu *.Mask))
            (pad "" np_thru_hole circle (at 0 0 ${p.r}) (size 5 5) (drill 5) (layers F&B.Cu *.Mask))
            (pad "" np_thru_hole circle (at 2.6 5.75 ${p.r}) (size 3 3) (drill 3) (layers F&B.Cu *.Mask))
            (pad "" np_thru_hole circle (at -5 3.75 ${p.r}) (size 3 3) (drill 3) (layers *.Mask "F.Cu" "In1.Cu" "B.Cu"))
            (pad "" np_thru_hole circle (at -2.54 5.08 ${180 + p.r}) (size 3 3) (drill 3) (layers F&B.Cu *.Mask))
            (pad "" np_thru_hole circle (at 0 5.9 ${p.r}) (size 3 3) (drill 3) (layers F&B.Cu *.Mask))
            (pad "" np_thru_hole circle (at 5.5 0 ${p.r}) (size 1.7018 1.7018) (drill 1.7018) (layers F&B.Cu *.Mask))
            (pad "" np_thru_hole circle (at -5.5 0 ${p.r}) (size 1.7018 1.7018) (drill 1.7018) (layers F&B.Cu *.Mask))
            (pad "1" thru_hole circle (at 2.54 -5.08 ${180 + p.r}) (size 2.3 2.3) (drill 1.5) (layers *.Cu *.Mask) ${p.from})
            (pad "1" thru_hole circle (at 4.4 -4.7 ${180 + p.r}) (size 2.3 2.3) (drill 1.5) (layers *.Cu *.Mask) ${p.from})
            (pad "1" smd rect (at -6.29 5.08 ${180 + p.r}) (size 2.55 2.5) (layers "B.Cu" "B.Paste" "B.Mask") ${p.from})
            (pad "1" smd rect (at -7.675 4.7 ${p.r}) (size 2.6 2.6) (layers "B.Cu" "B.Paste" "B.Mask") ${p.from})
            (pad "1" thru_hole circle (at 5 -3.8 ${180 + p.r}) (size 2.3 2.3) (drill 1.5) (layers *.Cu *.Mask) ${p.from})
            (pad "1" smd rect (at -8.275 3.8 ${p.r}) (size 2.6 2.6) (layers "B.Cu" "B.Paste" "B.Mask") ${p.from})
            (pad "2" smd rect (at 7.56 2.54 ${180 + p.r}) (size 2.55 2.5) (layers "B.Cu" "B.Paste" "B.Mask") ${p.to})
            (pad "2" thru_hole circle (at 0 -5.9 ${180 + p.r}) (size 2.3 2.3) (drill 1.5) (layers *.Cu *.Mask) ${p.to})
            (pad "2" thru_hole circle (at -2.6 -5.75 ${180 + p.r}) (size 2.3 2.3) (drill 1.5) (layers *.Cu *.Mask) ${p.to})
            (pad "2" smd rect (at 5.875 5.75 ${p.r}) (size 2.6 2.6) (layers "B.Cu" "B.Paste" "B.Mask") ${p.to})
            (pad "2" smd rect (at 3.275 5.9 ${p.r}) (size 2.6 2.6) (layers "B.Cu" "B.Paste" "B.Mask") ${p.to})
            (pad "2" thru_hole circle (at -3.81 -2.54 ${180 + p.r}) (size 2.3 2.3) (drill 1.5) (layers *.Cu *.Mask) ${p.to})
        `
        const switch_hole = `${p.include_switch_hole ? 
                            `(fp_line (start -7 -7) (end -7 7) (layer "Eco2.User") (width 0.12))
                             (fp_line (start 7 7) (end 7 -7) (layer "Eco2.User") (width 0.12))
                             (fp_line (start 7 -7) (end -7 -7) (layer "Eco2.User") (width 0.12))
                             (fp_line (start -7 7) (end 7 7) (layer "Eco2.User") (width 0.12))` 
                             : ''}
                            `

        const traces =  `${p.include_traces ? 
                        `
                        (segment (start ${p.eaxy(-2.45, -5.9)}) (end ${p.eaxy(-2.6, -5.75)}) (width 0.25) (layer "F.Cu"))
                        (segment (start ${p.eaxy(-3.81, -4.54)}) (end ${p.eaxy(-3.81, -2.54)}) (width 0.25) (layer "F.Cu"))
                        (segment (start ${p.eaxy(0, -5.9)}) (end ${p.eaxy(-2.45, -5.9)}) (width 0.25) (layer "F.Cu"))
                        (segment (start ${p.eaxy(-2.6, -5.75)}) (end ${p.eaxy(-3.81, -4.54)}) (width 0.25) (layer "F.Cu"))
                        (segment (start ${p.eaxy(-3.81, -2.54)}) (end ${p.eaxy(-2.46, -2.54)}) (width 0.25) (layer "B.Cu"))
                        (segment (start ${p.eaxy(-2.46, -2.54)}) (end ${p.eaxy(-1.6, -3.4)}) (width 0.25) (layer "B.Cu"))
                        (segment (start ${p.eaxy(7.56, -0.44)}) (end ${p.eaxy(7.56, 2.54)}) (width 0.25) (layer "B.Cu"))
                        (segment (start ${p.eaxy(-1.6, -3.4)}) (end ${p.eaxy(1.8, -3.4)}) (width 0.25) (layer "B.Cu"))
                        (segment (start ${p.eaxy(3.6, -1.6)}) (end ${p.eaxy(6.4, -1.6)}) (width 0.25) (layer "B.Cu"))
                        (segment (start ${p.eaxy(1.8, -3.4)}) (end ${p.eaxy(3.6, -1.6)}) (width 0.25) (layer "B.Cu"))
                        (segment (start ${p.eaxy(7.56, 2.54)}) (end ${p.eaxy(7.56, 4.065001)}) (width 0.25) (layer "B.Cu"))
                        (segment (start ${p.eaxy(6.4, -1.6)}) (end ${p.eaxy(7.56, -0.44)}) (width 0.25) (layer "B.Cu"))
                        (segment (start ${p.eaxy(7.56, 4.065001)}) (end ${p.eaxy(5.875, 5.750001)}) (width 0.25) (layer "B.Cu"))
                        `
                        : ''}
                        `

        return `
        ${standard}
        ${switch_hole}
        )

        ${''/* Traces */}
        ${traces}
        `;
    }
}