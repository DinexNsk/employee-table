import { OverridableComponent } from '@material-ui/core/OverridableComponent';
import DoneIcon from '@material-ui/icons/Done';
import CloseIcon from '@material-ui/icons/Close';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { SvgIconTypeMap } from '@material-ui/core';

export type Variants = 'edit' | 'delete' | 'done' | 'close';

type VariantIcons = { [key in Variants]: OverridableComponent<SvgIconTypeMap<{}, "svg">> }

export const variantIcons: VariantIcons = {
    edit: EditIcon,
    delete: DeleteIcon,
    done: DoneIcon,
    close: CloseIcon,
}