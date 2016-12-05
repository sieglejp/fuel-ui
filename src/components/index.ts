export * from "./Accordion/Accordion";
export * from "./Accordion/AccordionItem";
export * from "./Alert/Alert";
export * from "./Carousel/Carousel";
export * from "./Modal/Modal";
export * from "./Pagination/Pagination";
export * from "./InfiniteScroller/InfiniteScroller";
export * from "./DatePicker/DatePicker.Module";
export * from "./Dropdown/Dropdown";
export * from "./Tab/Tab";
export * from "./Tab/TabSet";
export * from "./TableSortable/TableSortable";
export * from "./TableSortable/TableSortableColumn";
export * from "./TableSortable/TableSortableSorting";
export * from "./Tag/Tag";
export * from "./Tag/TagSet";
export * from "./Slider/Slider";
export * from "./TimePicker/TimePicker";
export * from "./TextExpander/TextExpander";
export * from "./OffCanvasMenu/OffCanvasMenu";

import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

import {FuiAccordionModule} from "./Accordion/Accordion";
import {FuiAlertModule} from "./Alert/Alert";
import {FuiCarouselModule} from "./Carousel/Carousel";

import {FuiModalModule} from "./Modal/Modal";
import {FuiPaginationModule} from "./Pagination/Pagination";
import {FuiDatePickerModule} from "./DatePicker/DatePicker.Module";
import {FuiInfiniteScrollerModule} from "./InfiniteScroller/InfiniteScroller";
import {FuiDropdownModule} from "./Dropdown/Dropdown";
import {FuiTabModule} from "./Tab/Tab";
import {FuiTagModule} from "./Tag/Tag";

import {FuiTableSortableModule} from "./TableSortable/TableSortable";
import {FuiSliderModule} from "./Slider/Slider";
import {FuiTimePickerModule} from "./TimePicker/TimePicker";
import {FuiTextExpanderModule} from "./TextExpander/TextExpander";
import {FuiOffCanvasMenuModule} from "./OffCanvasMenu/OffCanvasMenu";

const declarations = [];

const componentModules = [
    FuiAccordionModule,
    FuiAlertModule,
    FuiCarouselModule,
    FuiDropdownModule,
    FuiInfiniteScrollerModule,
    FuiDatePickerModule,
    FuiModalModule,
    FuiOffCanvasMenuModule,
    FuiPaginationModule,
    FuiTabModule,
    FuiTagModule,
    FuiTableSortableModule,
    FuiSliderModule,
    FuiTimePickerModule,
    FuiTextExpanderModule,
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ...componentModules
    ],
    declarations: declarations,
    exports: [
        ...declarations,
        ...componentModules
    ]
})
export class FuiComponentsModule { }
